import { PluginOption } from "vite";
import { join, resolve } from "path";
import { writeFileSync } from "fs";

/** microApp 微前端 vite 插件 */
export const microAppPlugin = (): PluginOption => {
  let basePath = ""; // 静态资源替换
  return {
    name: "backend-module-system",
    apply: "build",
    configResolved: (config) => {
      basePath = `${config.base}${config.build.assetsDir}/`;
    },
    writeBundle: async (options, bundle) => {
      const chunks = [...Object.values(bundle)];
      chunks.forEach((chunk: any) => {
        const isJSFile = chunk?.fileName.endsWith(".js");
        if (!isJSFile) return;
        // 匹配 from './xxxx/xxx' 把 ./ => 改成 基座应用地址，（相对地址 改 绝对地址）
        chunk.code = chunk?.code?.replace(
          /(from|import\()(\s*['"])(\.\.?\/)/g,
          (all, $1, $2, $3) => all?.replace($3, new URL($3, basePath))
        );
        const fullPath = join(options.dir ?? "", chunk.fileName);
        writeFileSync(fullPath, chunk?.code);
      });
    },
  };
};

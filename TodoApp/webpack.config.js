const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); // 설치한 모듈 가져오기

module.exports = {
  mode: "development",
  entry: "app.js", // 번들 작업할 파일
  output: {
    path: path.resolve(__dirname, "dist"), // 번들화 된 파일 경로
    filename: "bundle.js", // 파일 명
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  watch: true, // 자동 번들화 작업 여부

  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000, // 포트 3000을 사용
      files: ["./*.html"], // 해당 경로 내 html 파일이 자동으로 동기화 (이 부분이 없으면 html 파일 변경사항 동기화 x)
      server: { baseDir: ["./"] }, // server의 Base 디렉토리를 /로 지정
    }),
  ],
};

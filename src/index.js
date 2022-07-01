/**  
*    @param { Express } app
*    @param { string }  path Register folder 'Absolute path'
*    @description  
*    @Date 2022-06-30 15:07:32 Thursday 
*/
module.exports = function buildRoutes(app, path) {
  const fs = require('fs')
  let filelist = fs.readdirSync(path)
  filelist.forEach(file => {
    var stat = fs.lstatSync(path + '/' + file);
    let isFile = stat.isFile()
    let isDirectory = stat.isDirectory()
    try {
      if (isFile) {
        let suffix = file.split('.')[0]
        let model = require(path + '/' + suffix)
        if (model) {
          app.use('/' + suffix, model)
        }
      } else if (isDirectory) {
        let fielPath = path + '/' + file
        buildRoutes(app, fielPath)
      }
    } catch (err) {
      // console.log(err);
    }
  })
}
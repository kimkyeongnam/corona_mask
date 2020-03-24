//서버 설정 
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '../../html/onlinemask.html'))
})

/*app.get('/video', function (req, res) {

  async function listFilesByPrefix() {

    const options = {
      prefix: prefix,
    };

    if (delimiter) {
      options.delimiter = delimiter;
    }

    // Lists files in the bucket, filtered by a prefix
    const [files] = await storage.bucket(bucketName).getFiles(options);

    console.log('Files:');
    files.forEach(file => {

      console.log(file.name);

    });
    const path = prefix
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range


    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize - 1

      if (start >= fileSize) {
        res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
        return
      }

      const chunksize = (end - start) + 1
      const file = fs.createReadStream(path, { start, end })
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }

      res.writeHead(206, head)
      file.pipe(res)
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  }

  listFilesByPrefix();
})
app.get('/imgs', function (req, res) {
  fs.readFile('assets/stopdriving.png', function (error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);

  })
})
*/
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

function getCommonDirectoryPath(pathes) {
  let result = [];
  for (let i = 0; i < pathes.length; i++) {
    pathes[i] = pathes[i].split('/');
  }
  for (let j = 0; j < pathes[0].length; j++) {
    for (let i = 0; i < pathes.length; i++) {
      if (pathes[i][j] !== pathes[i + 1][j]) {
        return result;
      }
      result.push()
    }
  }
  return pathes;
}
getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']);

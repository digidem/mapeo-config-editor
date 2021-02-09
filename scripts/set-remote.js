const fs = require('fs')

const gitRemoteFile= `${process.cwd()}/.git/config`
const envFilePath = `${process.cwd()}/.env`
console.log('Creating .env file from Github repo origin')
fs.readFile(gitRemoteFile, async (err, data) => {
    if (err) throw err
    const stringData = data.toString()
    const usernameAndReponame = stringData.split('github')[2].split(':')[1].split('.git')[0]
    const envFileContent = `REACT_APP_MAPEO_CONFIG_REPO=${usernameAndReponame}`
    await fs.writeFileSync(envFilePath, envFileContent)
    console.log('Done creating', envFilePath, 'with', envFileContent)
})

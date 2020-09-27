console.log('Module.js')

async function start() {
  return await Promise.resolve('asinc working')
}

start().then(console.log)

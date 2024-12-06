export async function server() {
    console.log('server loaded')
  const server = await fetch("../server.json")
    .then(server => {
        console.log(JSON.stringify(server));
    })
    .catch(error => {
        console.log(error);
    });
}

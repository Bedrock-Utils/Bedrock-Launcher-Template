export async function openMinecraft(serverUrl, serverPort) {
    const target = isMobile() ? "_blank" : "_self";
    const url = `minecraft://connect?serverUrl=${serverUrl}&serverPort=${serverPort}`;
    window.open(url, target);
  }
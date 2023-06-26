const url = "http://localhost:4000"
const fetchData = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const data = await (await fetch(`${url}/animal`, options)).json()
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
fetchData()

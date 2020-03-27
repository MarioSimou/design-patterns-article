const handleHTTPRequest = httpClient => async options => httpClient(options)
const customClient = options => Promise.resolve({...options, status: 200});

(async () => {
  const fetch = handleHTTPRequest(customClient)
  // note that fetch is used in both cases to fetch data, without repeating ourselves passing the customClient   
  const res = await Promise.all([
    fetch({method: 'GET', headers: { 'Accept': 'application/json'}}),
    fetch({method: 'POST', headers: {'Content-Type': 'application/json'}, body: { username: "test", password: '12345678'}})
  ])
  console.log(res)
})();

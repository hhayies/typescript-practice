export default function callbackSample() {
    const url = "https:api.github.com/users/deatiger"

    const fetchProfile = () => {
        fetch(url)
            .then((res) => {
                res.json()
                    .then((json) => {
                        console.log("async success", json)
                        return json
                    })
                    .catch((error) => {
                        console.log(error(error));
                    })
            })
            .catch((error) => {
                console.log(error(error));
            })
    }

    const profile = fetchProfile()
    console.log("sample2", profile);
}

export default function PromiseSample() {
    const url = "https:api.github.com/users/deatiger"

    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = () => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((res) => {
                res.json()
                    .then((json: Profile) => {
                        console.log("async success", json)
                        resolve(json)
                    })
                    .catch((error) => {
                        console.log(error(error));
                        reject(null)
                    })
            })
            .catch((error) => {
                console.log(error(error));
                reject(null)
            })
        })
    }

    fetchProfile()
        .then((profile: Profile | null) => {
            if (profile) {
                console.log("async sucess", profile);
            }
        })
        .catch(() => {
            console.log("error");
            
        })
}

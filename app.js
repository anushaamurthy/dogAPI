console.log('hello')
const container=document.getElementById('image-container');


function fetchdogpics() {
fetch("https://dog.ceo/api/breeds/image/random")
            .then(function(rawResponse) {
            return rawResponse.json()
            }).then(function(usableData) {
              const image = document.createElement('img');
              image.src = usableData.message
              container.appendChild(image)
            })
        }

        function fetchdogbreeds() {
            fetch("https://dog.ceo/api/breeds/list/all")
                        .then(function(Response) {
                        return Response.json()
                        }).then(function(jsonData) {
                          const option = document.createElement('option')
                          option.value = jsonData.message
                          container.appendChild(option)
                        })
                    }
            
            
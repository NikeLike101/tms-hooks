

export const getPhoto = async (photoId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    const data = await response.json()
    return data
}
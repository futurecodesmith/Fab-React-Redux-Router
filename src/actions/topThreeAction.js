
export const populate = () => {

  return {
    type: 'populate',
    item: [
      {
        src: "https://unsplash.it/300?image=14",
        name: "Blissful Ignorance",
        description: "49",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=18",
        name: "Mountaintop Experience",
        description: "39",
        id: Math.floor(Math.random() * 1000)
      },
      {
        src: "https://unsplash.it/300?image=10",
        name: "Delight and Cherish",
        description: "49",
        id: Math.floor(Math.random() * 1000)
      },
    ]
  }
}
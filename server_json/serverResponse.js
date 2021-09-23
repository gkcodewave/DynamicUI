export const serverResponseForDynamicComponentUI = {
  type : "View",
  children : [
    {
      type: "View",
      styles: {
        backgroundColor: "gray",
        flex:1,
        justifyContent:"center",
        alignItems: "center"
      },
      children: [
        {
          type: "Text",
          styles: {
            color: "black",
            fontSize: 20
          },
          text: "Dynamic Component"
        },
        {
          type: "View",
          styles: {
            backgroundColor: "red",
            width: 180,
            height: 5,
            marginTop: 10
          },
          children: []
        }
      ]
    },
    {
      type: "View",
      styles: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
      },
      children: [
        {
          type: "Text",
          styles: {
            color: "red",
            fontSize: 40
          },
          text: "Server Driven UI"
        }
      ]
    },
    {
      type: "View",
      styles: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "black"
      },
      children: [
        {
          type: "Text",
          styles: {
            color: "white",
            fontSize: 80
          },
          text: "UI as json object"
        }
      ]
    }
  ],
  styles: {
    flex:1
  }
}


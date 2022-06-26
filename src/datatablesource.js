export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Larry",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      status: "active",
      email: "larry@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Joe",
      img: "https://images.pexels.com/photos/1813922/pexels-photo-1813922.jpeg?cs=srgb&dl=pexels-eduardo-dutra-1813922.jpg&fm=jpg",
      email: "joe2w@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg",
      email: "lannistert@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "tony.iron@gmail.com",
      status: "active",
      age: 34,
    },
    {
      id: 5,
      username: "Benita",
      img: "https://images.pexels.com/photos/5177134/pexels-photo-5177134.jpeg?cs=srgb&dl=pexels-bethany-ferr-5177134.jpg&fm=jpg",
      email: "beniiow@gmail.com",
      status: "passive",
      age: 27,
    },
    {
      id: 6,
      username: "Floyd may",
      img: "https://images.pexels.com/photos/1561319/pexels-photo-1561319.jpeg?cs=srgb&dl=pexels-leah-kelley-1561319.jpg&fm=jpg",
      email: "floyyyd@gmail.com",
      status: "active",
      age: 19,
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?cs=srgb&dl=pexels-creation-hill-1681010.jpg&fm=jpg",
      email: "travis.cliff@gmail.com",
      status: "passive",
      age: 24,
    },
    {
      id: 8,
      username: "Scoot",
      img: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?cs=srgb&dl=pexels-cottonbro-5082976.jpg&fm=jpg",
      email: "dfdow@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sinners34@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 10,
      username: "jamie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jammycutw@gmail.com",
      status: "active",
      age: 65,
    },
  ];
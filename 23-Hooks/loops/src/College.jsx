function College() {
  const collegeData = [
    {
      name: 'COETA',
      City: 'Baulgao',
      freinds: [
        { name: 'Rohit Sirsat', branch: 'CSE' },
        { name: 'Aditya Wakpanjar', branch: 'CSE' },
      ],
    },
    {
      name: 'S.R.Patil',
      City: 'Tukaram Chouk',
      freinds: [
        { name: 'Rohit Sirsat', branch: 'Gen. Science' },
        { name: 'Arujun Wathore', branch: 'Commerce' },
      ],
    },
    {
      name: 'Sharda Vidyaniketan',
      City: 'Malkapur',
      freinds: [
        { name: 'Shravan Gaikwad', branch: '10th' },
        { name: 'Arjun Wathore', branch: '10th' },
      ],
    },
  ];

  return (
    <>
      <div className="css-college">
        {collegeData.map((college, index) => (
          <div key={index} className="college-card">
            <h3>College Name: {college.name}</h3>
            <p>City: {college.City}</p>

            <ul>
              {college.freinds.map((friend, i) => (
                <li key={i}>
                  {friend.name} - <b>{friend.branch}</b>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default College;

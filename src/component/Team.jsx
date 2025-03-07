const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeBLDLvb7im7q9gygKhAs8fIqYTShKzrNVg&s",
    },
    {
      name: "Michael Johnson",
      role: "UI/UX Designer",
      image: "https://www.stylecraze.com/wp-content/uploads/2013/06/Beautiful-Chinese-Girl-1_1200px.jpg.webp",
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
  ];

function Team(){
    return(
        <>
        <section className="py-16 bg-grey-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">Meet our Team Memberes</h2>
                <p className="text-gray-600 mt-4">Dedicated professionals working togther to bring success.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                {teamMembers.map((member, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <img src={member.image}
                     alt={member.name} className="w-24 h-24 mx-auto rounded-full object-cover" />
                     <h3 className="text-xl font-semibold mt-4 text-gray-800">{member.name}</h3>
                     <p className="text-gray-600">{member.role}</p>
                </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Team;
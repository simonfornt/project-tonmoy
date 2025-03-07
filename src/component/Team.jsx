const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Johnson",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager",
      image: "https://via.placeholder.com/150",
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
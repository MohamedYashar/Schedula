


import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function DoctorBox() {


  const initialDocDetails = [
    {

      DocName: "Dr.Frank",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "General Consultant",
      Clinic: "Universal Hospital",

    },
    {

      DocName: "Dr. Reddin",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "ENT Consultant",
      Clinic: "March Hospital",

    },
    {

      DocName: "Dr.Tasha",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8R1Vq9TuU6SdXW16zmZI0kAcNik_cJIsZZw&usqp=CAU",
      Speciality: "Cardiac Consultant",
      Clinic: " World Hospital",

    },
    {

      DocName: "Dr.Dustin",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "Eye Consultant",
      Clinic: "Victory Hospital",

    },
    {

      DocName: "Dr.Phantom",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "Ortho Consultant",
      Clinic: "Mandrin Hospital",

    },
    {

      DocName: "Dr.Prince",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "Dental Consultant",
      Clinic: " Opal Hospital",

    },
    {

      DocName: "Dr.Preeth",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "Eye Consultant",
      Clinic: "Victory Hospital",

    },
    {

      DocName: "Dr. Fedrick",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "Ortho Consultant",
      Clinic: "Mandrin Hospital",

    },
    {

      DocName: "Dr.Mark",
      poster: "https://img.freepik.com/premium-vector/making-appointment-online-flat-concept-vector-illustration_151150-12423.jpg",
      Speciality: "Ortho Consultant",
      Clinic: " Opal Hospital",

    },
    {

      DocName: "Dr.Binny",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8R1Vq9TuU6SdXW16zmZI0kAcNik_cJIsZZw&usqp=CAU",
      Speciality: "Child Consultant",
      Clinic: " Opal Hospital",

    }
    // Add more doctor details here
  ];

  const [docDetails, setDocDetails] = useState(initialDocDetails);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredDocs = initialDocDetails.filter((doc) => {
      return (
        doc.DocName.toLowerCase().includes(term) ||
        doc.Speciality.toLowerCase().includes(term) ||
        doc.Clinic.toLowerCase().includes(term)
      );
    });

    setDocDetails(filteredDocs);
  };

  return (

    <div className='masterDocBox' >



      <div style={{ position: 'relative' }}>
      <span>
      
      <input
        type='text'
        placeholder='🔍 Search your doctor here'
        value={searchTerm}
        onChange={handleSearch}
        style={{
          height: "30px",
          position: 'static',
          marginTop:"20px",
          top: '10px', // Adjust the top position as needed
          left: '50%', // Adjust the left position as neede
          width: "200px",
        }}
      />
        
        </span>    

      </div>

    <div className='DocBox'>
      

      {docDetails.map((item, index) => (
        <Card className='cardbox' sx={{ maxWidth: 200 }} key={index}>
          <CardMedia sx={{ height: 70 }} image={item.poster} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.DocName}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.Speciality}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.Clinic}
            </Typography>
          </CardContent>
          <Button variant="contained">Book Appointment</Button>
        </Card>
      ))}
    </div>
    </div>
  );
}


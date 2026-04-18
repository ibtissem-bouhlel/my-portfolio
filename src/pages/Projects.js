import { useState } from 'react';

const projects = [
  {
    title: 'Implementation of a multi-tier Cloud network on AWS/VPC',
    short: 'Design and implementation of a secure cloud network infrastructure on AWS using EC2 instances, VPN, routing, and monitoring.',
    tags: ['AWS', 'Cloud', 'VPC','Security', 'High availability',' Monitoring'],
    color: '#6C63FF',
    
    icon: '🔒',
      github: 'https://github.com/ibtissem-bouhlel/Implementation-of-a-multi-tier-Cloud-network-on-AWS-VPC', // ← add your link
    details: {
      description: 'This work is developed as part of the final project for obtaining the Professional Master s degree in System and Network Security at the Higher Institute of Computer Science and Communication Technologies of Sousse. This project focuses on the implementation of a multi-tier Cloud network to ensure high availability, enhanced security, and continuous compliance. By integrating advanced monitoring and security solutions, it ensures proactive protection and efficient management of Cloud resources.',
      
      tools: ['EC2', 'Subnets', 'Security Group', 'NACL', 'Route Tables', 'Internet Gateway', 'Flow LOG', 'CloudTrail', 'CloudWatch', 'AWS Lambda','SNS Notification'],
      steps: [
        'Network Design and Segmentation',
        'Routing Configuration',
        'Security Implementation',
        'VPN Setup and Configuration',
        'Monitoring and Logging',
        'EC2 Instance Infrastructure Setup',
      ],
    },
  },
  {
    title: 'Design and development of a connected air quality analyzer',
    short: 'Connected air quality analyzer built with ESP32, Firebase and React JS — monitors CO, CO2, temperature, humidity and more in real-time',
    tags: ['QIA', 'ESP32', 'Detection', 'Web', 'React','Firebase'],
    color: '#00D4AA',
    icon: '📡',
      github: 'https://github.com/ibtissem-bouhlel/airsystem',
    details: {
      description: 'This end-of-study project was developed at ARCANGEL Technologies. The goal was to design a connected air quality analyzer that continuously monitors environmental pollutants in indoor spaces, in compliance with air quality regulations. The system is built around an ESP32 microprocessor and detects CO, CO2, hydrogen, smoke, dust, fine particles, temperature, humidity, luminosity, atmospheric pressure, and sound levels. All data is synchronized in real-time with Firebase and visualized through a React JS web application.',
      tools: ['Arduino', 'ReactJs', 'Bootstrap', 'Firebase', 'php'],

      steps: [
        'Architecture and development of firmware for embedded systems',
        'writing the code for each sensor used',
        'Backend development using PHP',
        'Database design and implementation',
        'Web interface development with React JS',
      ],
      
    },
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>
      <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>
        My <span style={{ color: '#6C63FF' }}>Projects</span>
      </h2>
      <p style={{ color: '#888', marginBottom: 50 }}>
        
      </p>

      {/* PROJECT CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(selected === i ? null : i)}
            style={{
              background: '#13131f',
              border: `1px solid ${selected === i ? p.color : p.color + '22'}`,
              borderRadius: 12,
              padding: 28,
              borderTop: `3px solid ${p.color}`,
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: selected === i ? 'scale(1.02)' : 'scale(1)',
              
            }} 
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>{p.icon}</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{p.title}</h3> 
            <p style={{ color: '#888', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.short}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
               
              {p.tags.map(t => (
                <span key={t} style={{
                  background: `${p.color}20`, color: p.color,
                  padding: '3px 10px', borderRadius: 99, fontSize: 12, fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
            
            
            <div style={{ color: p.color, fontSize: 13, fontWeight: 500 }}>
              {selected === i ? '▲ Hide details' : '▼ Show details'}
            </div>

          </div>
        ))}
      </div>

      {/* DETAILS PANEL */}

    
      {selected !== null && (
        <div style={{
          marginTop: 32,
          background: '#13131f',
          border: `1px solid ${projects[selected].color}44`,
          borderRadius: 12,
          padding: 36,
          borderLeft: `4px solid ${projects[selected].color}`,
          animation: 'fadeIn 0.3s ease',
        }}>
         
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: projects[selected].color }}>
            {projects[selected].icon} {projects[selected].title}
          </h3>

          <p style={{ color: '#aaa', lineHeight: 1.8, marginBottom: 28, fontSize: 15 }}>
            {projects[selected].details.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

            {/* TOOLS */}
            
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: '#ccc' }}>
                🛠️ Tools Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {projects[selected].details.tools.map(t => (
                  <span key={t} style={{
                    background: `${projects[selected].color}20`,
                    color: projects[selected].color,
                    padding: '5px 14px', borderRadius: 99, fontSize: 13,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* STEPS */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: '#ccc' }}>
                📋 What I Did
              </h4>
              <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                {projects[selected].details.steps.map((s, idx) => (
                  <li key={idx} style={{
                    color: '#888', fontSize: 14, marginBottom: 8,
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                  }}>
                    <span style={{ color: projects[selected].color, marginTop: 2 }}>✓</span>
                    {s}
                  </li>
                  
                ))}
              </ul>

            </div>
<a href="https://github.com/ibtissem-bouhlel "> Github Projects </a>             
       </div>
          
        </div>
        
      )}

      <style>{`
       
        
      `}</style>
    </div>
  );
}
import React from 'react';
import './home.css';
import AudioPlayer from '../../Components/AudioPlayer';
import * as Audios from './Audios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'



const audioListArray = [
    {
        index:1,
        audioSource:Audios.Audio_1,
        title:'Audio 1',
        download:false,
        description: 'Description of Audio 1'
    },
    {
        index:2,
        audioSource:Audios.Audio_2,
        title:'Audio 2',
        download:false,
        description: 'Description of Audio 2'
    },
    {
        index:3,
        audioSource:Audios.Audio_3,
        title:'Audio 3',
        download:false,
        description: 'Description of Audio 3'
    },
    {
        index:4,
        audioSource:Audios.Audio_4,
        title:'Audio 4',
        download:false,
        description: 'Description of Audio 4'
    },
    {
        index:5,
        audioSource:Audios.Audio_5,
        title:'Audio 5',
        download:false,
        description: 'Description of Audio 5'
    },
    {
        index:6,
        audioSource:Audios.Audio_6,
        title:'Audio 6',
        download:false,
        description: 'Description of Audio 6'
    },
    {
        index:7,
        audioSource:Audios.Audio_7,
        title:'Audio 7',
        download:false,
        description: 'Description of Audio 7'
    },
    {
        index:8,
        audioSource:Audios.Audio_8,
        title:'Audio 8',
        download:false,
        description: 'Description of Audio 8'
    },
    {
        index:9,
        audioSource:Audios.Audio_9,
        title:'Audio 9',
        download:false,
        description: 'Description of Audio 9'
    },
    {
        index:10,
        audioSource:Audios.Audio_10,
        title:'Audio 10',
        download:false,
        description: 'Description of Audio 10'
    },
    {
        index:11,
        audioSource:Audios.Audio_11,
        title:'Audio 11',
        download:false,
        description: 'Description of Audio 11'
    },
    {
        index:12,
        audioSource:Audios.Audio_12,
        title:'Audio 12',
        download:false,
        description: 'Description of Audio 12'
    },
    {
        index:13,
        audioSource:Audios.Audio_13,
        title:'Audio 13',
        download:false,
        description: 'Description of Audio 13'
    },
    {
        index:14,
        audioSource:Audios.Audio_14,
        title:'Audio 14',
        download:false,
        description: 'Description of Audio 14'
    },
    {
        index:15,
        audioSource:Audios.Audio_15,
        title:'Audio 15',
        download:false,
        description: 'Description of Audio 15'
    },
    {
        index:16,
        audioSource:Audios.Audio_16,
        title:'Audio 16',
        download:false,
        description: 'Description of Audio 16'
    },
    {
        index:17,
        audioSource:Audios.Audio_17,
        title:'Audio 17',
        download:false,
        description: 'Description of Audio 17'
    },
    {
        index:18,
        audioSource:Audios.Audio_18,
        title:'Audio 18',
        download:false,
        description: 'Description of Audio 18'
    },
    {
        index:19,
        audioSource:Audios.Audio_19,
        title:'Audio 19',
        download:false,
        description: 'Description of Audio 19'
    },
    {
        index:20,
        audioSource:Audios.Audio_20,
        title:'Audio 20',
        download:false,
        description: 'Description of Audio 20'
    },
    {
        index:21,
        audioSource:Audios.Audio_21,
        title:'Audio 21',
        download:false,
        description: 'Description of Audio 21'
    },
    {
        index:22,
        audioSource:Audios.Audio_22,
        title:'Audio 22',
        download:false,
        description: 'Description of Audio 22'
    },
    {
        index:23,
        audioSource:Audios.Audio_23,
        title:'Audio 23',
        download:false,
        description: 'Description of Audio 23'
    },
    {
        index:24,
        audioSource:Audios.Audio_24,
        title:'Audio 24',
        download:false,
        description: 'Description of Audio 24'
    },
    {
        index:25,
        audioSource:Audios.Audio_25,
        title:'Audio 25',
        download:false,
        description: 'Description of Audio 25'
    }
]

const compare = (a, b) => {
    const bandA = a.index;
    const bandB = b.index;
  
    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

const AudioLists = (props) => {
    const { audios } = props;
    return (
        <Container>
            <Row>
            {audios.sort(compare).map((value, index) => {
                return <Card bg="primary" text="white" key={index}>
                <Card.Header>
                    <AudioPlayer
                        src={value.audioSource}
                        controls
                        title={value.title}
                        controlsList={!value.download ? "nodownload": null} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>
                    {value.description}
                  </Card.Text>
                </Card.Body>
                </Card>
            })}
            </Row>
        </Container>
    )
}

const Works = () => {
    return (
        <div className="content">
            <AudioLists audios={audioListArray} />
        </div>
)};

export default Works;
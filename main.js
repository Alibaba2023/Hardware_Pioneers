const speaker = [
  {
    speakerImage: './img/speaker_photo4.jpg',
    speakerName: 'Massimo Banzi',
    speakerPosition: 'Co-founder & CTO',
    speakerDescription: 'Everything you think you know about Arduino is wrong',
  },
  {
    speakerImage: './img/speaker_photo5.jpg',
    speakerName: 'Aleksandr Timofeev',
    speakerPosition: 'CEO',
    speakerDescription: 'Neuromophic front-end chip for signal per-processing in sensor nodes',
  },
  {
    speakerImage: './img/speaker_photo3.jpg',
    speakerName: 'Nada Lakhal',
    speakerPosition: 'Field Application engineer',
    speakerDescription: 'Neuromophic front-end chip for signal per-processing in sensor nodes',
  },
  {
    speakerImage: './img/speaker_photo6.jpg',
    speakerName: 'Pasi Myllymaki',
    speakerPosition: 'Marketing manager',
    speakerDescription: 'Neuromophic front-end chip for signal per-processing in sensor nodes',
  },
  {
    speakerImage: './img/speaker_photo6.jpg',
    speakerName: 'Pasi Myllymaki',
    speakerPosition: 'Marketing manager',
    speakerDescription: 'Neuromophic front-end chip for signal per-processing in sensor nodes',
  },
  {
    speakerImage: './img/speaker_photo1.jpg',
    speakerName: 'Pasi Myllymaki',
    speakerPosition: 'Marketing manager',
    speakerDescription: 'Neuromophic front-end chip for signal per-processing in sensor nodes',
  },
];

const featureSpeaker = (data) => `
  <div class="speaker_detail_box">
    <div class="speakers_image_box">
      <img src="./img/speaker_background.jpg" class="speaker_background_image" alt="speaker background image">
      <img src="${data.speakerImage}" class="speaker_image" alt="speaker image">
    </div>
    <div class="speaker_detail_text-box">
      <h2 class="speaker_feature_header">${data.speakerName}</h2>
      <p class="speaker_position">${data.speakerPosition}</p>
      <p class="speaker_description">${data.speakerDescription}</p>
    </div>
  </div>
`;

const speakerContainer = document.querySelector('.speakers_container');
speaker.forEach((data) => {
  speakerContainer.innerHTML += featureSpeaker(data);
});

import StoryCard from './StoryCard';
const stories = [
  {
    name: 'Ruhul Chowdhury',
    src: 'https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/67172776_2445379112186435_9217008931136602112_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeExOAI8HUQgjXj639P0f0o_7YfhDk3IR03th-EOTchHTdIWJug_3N2ZclGPAUpAGSJmUEb_CKR6yEPCWkmw6ilA&_nc_ohc=8uSjc9x23-kAX8tETjP&_nc_ht=scontent.fdac22-1.fna&oh=00_AT-J0EW88gUEBX5bl_BW2g2XY4cN8rtWnrmRxxiJiX0Waw&oe=62013A46',
    profile:
      'https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/101938114_3138541646203508_6180879227904775611_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFKMUt6wi5qw-ViJSuWqvRKE8r_V16Gl9wTyv9XXoaX3FldPhfULW3qBS9qS5hc7R17cTEcmnU7hmOcXBOL2Hij&_nc_ohc=7_5J5pHuDRIAX9_i-Ig&_nc_ht=scontent.fdac22-1.fna&oh=00_AT-0Jt1lNR7S4EpMJkwLiydl57HgMsNCx9iSlqNGhI1H3Q&oe=62003D1B',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;

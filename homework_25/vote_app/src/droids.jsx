const images = import.meta.glob("./assets/droids/*.jpeg", {
  eager: true,
  import: "default",
});


const formatName = (fileName) => {
  return fileName
    .replace(/\.[^/.]+$/, "")      
    .replace(/[_]/g, " ")         
    .replace(/\b\w/g, (c) => c.toUpperCase()); 
};

const droids = Object.entries(images).map(([path, img], index) => {
  const fileName = path.split("/").pop(); 
  const name = formatName(fileName);      
  return {
    id: index + 1,
    name,
    img,
  };
});

export default droids;
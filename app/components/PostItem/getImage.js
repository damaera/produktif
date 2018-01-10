function getImg(meta, size) {
  const metaLn = meta.length;
  for (let i = 0; i < metaLn; i += 1) {
    const img = meta[i];
    const ext = img.split('.').pop();
    if (/(jpeg|png|gif|jpg)/.test(ext)) {
      return `https://steemitimages.com/${size}/${img}`;
    }
  }
  return false;
}

export default (metadata, { wide }) => {
  const metaImages = metadata.image;
  let size = '320x200';
  if (wide) {
    size = '640x400';
  }
  if (metaImages) {
    const img = getImg(metaImages, size);
    if (img) {
      return img;
    }
  }

  const metaLinks = metadata.links;
  if (metaLinks) {
    const img = getImg(metaLinks, size);
    if (img) {
      return img;
    }
  }

  if (metadata.video && metadata.video.info) {
    return `https://steemitimages.com/${size}/https://ipfs.io/ipfs/${metadata.video.info.snaphash}`;
  }

  if (metadata.ipfs_photo) {
    return `https://steemitimages.com/${size}/https://ipfs.io/ipfs/${metadata.ipfs_photo}`;
  }

  return false;
};

export function generateArticleImage(title) {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#0a0a0a');
  gradient.addColorStop(1, '#1a1a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  ctx.font = 'bold 60px Inter';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Wrap text
  const words = title.split(' ');
  let line = '';
  let lines = [];
  let y = canvas.height / 2;
  
  words.forEach(word => {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > canvas.width - 100) {
      lines.push(line);
      line = word + ' ';
    } else {
      line = testLine;
    }
  });
  lines.push(line);

  // Draw text lines
  lines.forEach((line, i) => {
    ctx.fillText(
      line.trim(),
      canvas.width / 2,
      y - ((lines.length - 1) * 70 / 2) + (i * 70)
    );
  });

  return canvas.toDataURL('image/png');
} 
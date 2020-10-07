const cameraPositionZ = (calc: number): number => {
  if (calc > 0 && calc <= 0.5) {
    return calc * 1000;
  }

  if (calc > 0.5 && calc <= 1.9) {
    return calc * 500;
  }

  if (calc > 1.9 && calc <= 2.1) {
    return calc * 300;
  }

  if (calc > 2.1 && calc <= 5) {
    return calc * 100;
  }

  if (calc > 10 && calc <= 21) {
    return calc * 10;
  }

  if (calc > 21 && calc <= 30) {
    return calc * 2;
  }

  if (calc > 30 && calc <= 80) {
    return calc / 1.5;
  }

  if (calc > 80 && calc <= 110) {
    return calc / 5;
  }

  if (calc > 110 && calc <= 400) {
    return calc / 30;
  }

  if (calc > 400 && calc <= 800) {
    return calc / 100;
  }

  if (calc > 800 && calc <= 1500) {
    return calc / 400;
  }

  return 0;
};

export default cameraPositionZ;

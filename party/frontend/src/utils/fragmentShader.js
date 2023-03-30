const fragmentShader = `
uniform float u_intensity;
uniform float u_time; 
varying vec2 vUv;
varying float vDisplacement; 

void main() { 
  float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
  // this defines our gradient 
  vec3 color = vec3(0.839,(0.396 - distort),0.941); 
  gl_FragColor = vec4(color, 1.0);
} `
export default fragmentShader



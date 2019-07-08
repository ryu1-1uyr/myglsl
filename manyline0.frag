precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min (resolution.x,resolution.y);
  float l_x = 0.01 * length(sin(time) / p.x);
  float l_y = 0.01 * length(sin(time) / p.y);

  float x = (p.x * p.x );
  float y = (p.y * p.y );
  float circle = x + y -0.2;
  float naka = sin( ( (x+y-9.0)) * (time * 0.1));

  gl_FragColor = vec4( vec3( ((naka *cos ( time * 0.2 )) * circle ) ,naka *sin(time * 0.09) , naka * (time * 0.05) ) , 0.5);

}

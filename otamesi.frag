precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D backbuffer;

void main() {
	vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
	float t = time * 1.9;
	p = p * p * 2.;

	p += vec2(0.5*sin(time + p.y*5.),0.8*sin(time + p.x* 4.));
	p += vec2(0.7*sin(time + p.y*1.),0.6*sin(time + p.x* 4.));
	p += vec2(0.9*sin(time + p.y*5.),0.4*sin(time + p.x* 4.));

	// p = p * p * 2.;

  float c = 0.;

  c += 0.01 / length(p -
    vec2(sin(t * 2.), cos(t * 1.))
    );

  c += 0.01 / length(p -
    vec2(sin(t*3.),tan(t *2.))
    );

    float d =0.0;

    d += 0.01/ length(p -
      vec2(cos(t),cos(time * 3.14))
      );

    d += 0.01 / length(p -
      vec2(cos(t),cos(t))
      );



  vec4 b = texture2D(backbuffer, gl_FragCoord.xy / resolution * 1.02 - (vec2(0.01) ));

  gl_FragColor = c * vec4(0.2, 0.3, 0.8, 1) + (b  * 0.95) + (d);



}

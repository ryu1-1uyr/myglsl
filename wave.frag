precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D backbuffer;

void main() {
	vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
	float t = time * 1.9;
	p = p * p * 2. ;

	// p += vec2(0.5*sin(time + p.y*5.),0.2*sin(time + p.x* 2.));
	// p += vec2(0.7*sin(time + p.y*1.),0.6*sin(time + p.x* 4.));
	// p += vec2(0.9*sin(time + p.y*5.),0.4*sin(time + p.x* 4.));

  float c = 0.;

		// c += 0.02 / length(p -
		// vec2(abs(cos(time * 2. )),atan(time))
		// );

		c += 0.02 / length(p -
		vec2(abs(sin(time * 0.8)), abs(sin(time)) )
		);

		c += 0.02 / length(p -
		vec2(abs(atan(time * 2. )),atan(time))
		);

		c += 0.02 / length(p -
		vec2(atan(time   )+3.9,abs(atan(time)) * 0.5)
		);

		c += 0.01 / length(p - vec2(abs(sin(time)*sin(time) ) ,0.5));

		c += 0.01 / length(p - vec2(abs(sin(time)) ,0.5));

    // float d = 0.0;
		//
		// float tate = 0.0;
		//
		// d += 0.001 / length(p -
		// vec2(abs(cos(time * 2. )),abs(tan(time)))
		// );
		//
		// d += 0.005 / length(p -
		// vec2(abs(sin(time * 2. )),tan(time))
		// );

		// d += 0.005 / length(p -
		// vec2(tan(time   )+3.9,abs(sin(time)) * 0.5)
		// );
		//
		// d += 0.01 / length(p -
		// vec2(abs(tan(time ) )+3.9,abs(cos(time)) * 0.5)
		// );
		//
		// d -= 0.01 / length(p - vec2(sin(t * 2.), sin(t * 0.2 )));




  vec4 b = texture2D(backbuffer, gl_FragCoord.xy / resolution * 1.02 - (vec2(0.01) ));
	//拡大して原点を0.01に辛いしている

	 // gl_FragColor = c * vec4(0.2, 0.3, 0.8, 1) + (b  * 0.9 ) + (d*d) + vec2(1,1) ;


  gl_FragColor = (c) * vec4(0.8, 0.3, 0.2, 1) + ( (c ) * vec4(0.2, 0.3, 0.8, 1)) + (( sin(b) * abs(sin(time * (c+c) ))) ) ;



}

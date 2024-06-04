# pnpmfile
.pnpmfile.cjs can not change the dependencies version.

When run `pnpm install`, it will print the log as follows
```
before {"name":"pnpmfile","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"keywords":[],"author":"","license":"ISC","devDependencies":{"typescript":"^5.4.5"},"dependencies":{},"optionalDependencies":{},"peerDependencies":{}}

after {"name":"pnpmfile","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"keywords":[],"author":"","license":"ISC","devDependencies":{"typescript":"^5.4.5"},"dependencies":{},"optionalDependencies":{},"peerDependencies":{}}
Progress: resolved 0, reused 1, downloaded 0, added 0
before {"bin":{"tsc":"./bin/tsc","tsserver":"./bin/tsserver"},"engines":{"node":">=14.17"},"name":"typescript","scripts":{"test":"hereby runtests-parallel --light=false","test:eslint-rules":"hereby run-eslint-rules-tests","build":"npm run build:compiler && npm run build:tests","build:compiler":"hereby local","build:tests":"hereby tests","build:tests:notypecheck":"hereby tests --no-typecheck","clean":"hereby clean","gulp":"hereby","lint":"hereby lint","format":"dprint fmt","setup-hooks":"node scripts/link-hooks.mjs"},"version":"5.4.5","dependencies":{},"devDependencies":{},"optionalDependencies":{},"peerDependencies":{}}   

after {"bin":{"tsc":"./bin/tsc","tsserver":"./bin/tsserver"},"engines":{"node":">=14.17"},"name":"typescript","scripts":{"test":"hereby runtests-parallel --light=false","test:eslint-rules":"hereby run-eslint-rules-tests","build":"npm run build:compiler && npm run build:tests","build:compiler":"hereby local","build:tests":"hereby tests","build:tests:notypecheck":"hereby tests --no-typecheck","clean":"hereby clean","gulp":"hereby","lint":"hereby lint","format":"dprint fmt","setup-hooks":"node scripts/link-hooks.mjs"},"version":"4.9.5","Already up to date
Progress: resolved 1, reused 1, downloaded 0, added 0, done
Done in 823ms
PS E:\kuaipan\code\gihub\pnpmfile> pnpm install
before {"name":"pnpmfile","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"keywords":[],"author":"","license":"ISC","devDependencies":{"typescript":"^5.4.5"},"dependencies":{},"optionalDependencies":{},"peerDependencies":{}}

after {"name":"pnpmfile","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"keywords":[],"author":"","license":"ISC","devDependencies":{"typescript":"^5.4.5"},"dependencies":{},"optionalDependencies":{},"peerDependencies":{}}
before {"name":"typescript","version":"5.4.5","devDependencies":{"@esfx/canceltoken":"^1.0.0","@octokit/rest":"^20.0.2","@types/chai":"^4.3.11","@types/glob":"^8.1.0","@types/microsoft__typescript-etw":"^0.1.3","@types/minimist":"^1.2.5","@types/mocha":"^10.0.6","@types/ms":"^0.7.34","@types/node":"latest","@types/source-map-support":"^0.5.10","@types/which":"^3.0.3","@typescript-eslint/eslint-plugin":"^6.19.0","@typescript-eslint/parser":"^6.19.0","@typescript-eslint/utils":"^6.19.0","azure-devops-node-api":"^12.3.0","c8":"^9.1.0","chai":"^4.4.1","chalk":"^4.1.2","chokidar":"^3.5.3","diff":"^5.1.0","dprint":"^0.45.0","esbuild":"^0.20.0","eslint":"^8.56.0","eslint-formatter-autolinkable-stylish":"^1.3.0","eslint-plugin-local":"^3.1.0","eslint-plugin-no-null":"^1.0.2","eslint-plugin-simple-import-sort":"^10.0.0","fast-xml-parser":"^4.3.3","glob":"^10.3.10","hereby":"^1.8.9","jsonc-parser":"^3.2.0","minimist":"^1.2.8","mocha":"^10.2.0","mocha-fivemat-progress-reporter":"^0.1.0","ms":"^2.1.3","node-fetch":"^3.3.2","playwright":"^1.41.0","source-map-support":"^0.5.21","tslib":"^2.6.2","typescript":"5.4.0-dev.20240119","which":"^3.0.1"},"bin":{"tsc":"bin/tsc","tsserver":"bin/tsserver"},"directories":{},"dist":{"integrity":"sha512-vcI4UpRgg81oIRUf2c571fdbd0f6718b1d1f5e6e5ef006f611","tarball":"https://registry.npmmirror.com/typescript/-/typescript-5.4.5.tgz","fileCount":116,"unpackedSize":32367480,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEUCIQC/EuYEcwumIh3BWR4qQd2ePcVqj994eiB0Nr62t4tU7wIga9Vr8kSDkXAsFoDBGj074mtGYD8EAyykePA9Hppu2z4="}],"size":5825770},"engines":{"node":">=14.17"},"_hasShrinkwrap":false,"publish_time":1712759119427,"_source_registry_name":"default","dependencies":{},"optionalDependencies":{},"peerDependencies":{}}      
after {"name":"typescript","version":"4.9.5","devDependencies":{"@esfx/canceltoken":"^1.0.0","@octokit/rest":"^20.0.2","@types/chai":"^4.3.11","@types/glob":"^8.1.0","@types/microsoft__typescript-etw":"^0.1.3","@types/minimist":"^1.2.5","@types/mocha":"^10.0.6","@types/ms":"^0.7.34","@types/node":"latest","@types/source-map-support":"^0.5.10","@types/which":"^3.0.3","@typescript-eslint/eslint-plugin":"^6.19.0","@typescript-eslint/parser":"^6.19.0","@typescript-eslint/utils":"^6.19.0","azure-devops-node-api":"^12.3.0","c8":"^9.1.0","chai":"^4.4.1","chalk":"^4.1.2","chokidar":"^3.5.3","diff":"^5.1.0","dprint":"^0.45.0","esbuild":"^0.20.0","eslint":"^8.56.0","eslint-formatter-autolinkable-stylish":"^1.3.0","eslint-plugin-local":"^3.1.0","eslint-plugin-no-null":"^1.0.2","eslint-plugin-simple-import-sort":"^10.0.0","fast-xml-parser":"^4.3.3","glob":"^10.3.10","hereby":"^1.8.9","jsonc-parser":"^3.2.0","minimist":"^1.2.8","mocha":"^10.2.0","mocha-fivemat-progress-reporter":"^0.1.0","ms":"^2.1.3","node-fetch":"^3.3.2","playwright":"^1.41.0","source-map-support":"^0.5.21","tslib":"^2.6.2","typescript":"5.4.0-dev.20240119","which":"^3.0.1"},"bin":{"tsc":"bin/tsc","tsserver":"bin/tsserver"},"directories":{},"dist":{"integrity":"sha512-vcI4UpRgg81oIRUFwR0WSIHKt11nJ7SAVlYNIu+QpqeyXP+gpQJy/Z4+F0aGxSE4MqwjyXvW/TzgkLAx2AGHwQ==","shasum":"42ccef2c571fdbd0f6718b1d1f5e6e5ef006f611","tarball":"https://registry.npmmirror.com/typescript/-/typescript-5.4.5.tgz","fileCount":116,"unpackedSize":32367480,"signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEUCIQC/EuYEcwumIh3BWR4qQd2ePcVqj994eiB0Nr62t4tU7wIga9Vr8kSDkXAsFoDBGj074mtGYD8EAyykePA9Hppu2z4="}],"size":5825770},"engines":{"node":">=14.17"},"_hasShrinkwrap":false,"publish_time":1712759119427,"_source_registry_name":"default","dependencies":{},"optionalDependencies":{},"peerDependencies":{}}       
Packages: +1
+
Progress: resolved 1, reused 1, downloaded 0, added 1, done

devDependencies:
+ typescript 4.9.5 (5.4.5 is available)

Done in 1.4s
```

But when install finished, run `pnpm list` will find the actual version installed is `5.4.5`:
```
Legend: production dependency, optional only, dev only

pnpmfile@1.0.0 E:\kuaipan\code\gihub\pnpmfile

devDependencies:
typescript 5.4.5
```
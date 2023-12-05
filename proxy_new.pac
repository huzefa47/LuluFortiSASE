function FindProxyForURL(url, host)
                {
                //
                //Bypass proxy for this domain
                //
                if (dnsDomainIs(host, "fs.lulumea.com"))
                {
                return "DIRECT";
                }
                return "PROXY turbo-914ju92k.edge.prod.fortisase.com:10873; DIRECT";
                }
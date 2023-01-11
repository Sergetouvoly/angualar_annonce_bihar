import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  token = "eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTdlVcL2JRQlJcL1RoTlJnVlNnRWtnZFlBRTI1RWgwek1SbjFjb05xR2tXa0VBWCsrRWVuT1wvTTNSbVNwY3BFaHd5cGFKRXFkZTNJZjlJdVwvUU5RTzNSbDd0cDNodURBZ25xVFwvZTduMzlmenhSVlVqSWJuc1daY0dEOFZXY3lsYjFMTlpXd3d6RFMzSFQ4enFDTzBPZUpGRG16U0JLNlBWd0l2Z0JLUExEd05EdGd4cXdvbTQrcG02d0JEVzJ0cldGSTZ2bUhjMXl6QkU2VVBcL1Z2dVVHbThJMUJRZTk5S01MSU5reXdNVlNadFhjbjFkc28xUnRzd1Vjd0NGUjY2MFZSSU55Z3RaOElNUTBkUXNwYkFLSUF4bHRsM2lsUTVHZ3ZqMTJZenkwVzFnYllXd09PVUdVUHU3aVZwV0dmZDNUdWJraEljd1hzb3QxT1BEblczNEtDKzRcL0ZYbFJDVW1pdHA1cHN5VVJIZjUwNmMrTHN6WnpcLzdYN3ZORWdCMXN2andOOFg4MlFwMHYrXC8rbmMyTDlrSUwwMFBXQzFpdG5aS2J5WUw1clVhbmZQbGw2OVA1MVllZFI2VHNFQnZcL3Y0XC81NVp2bU9xc3FTWmxtVmczdGlHaFB5dTZaeUZjZUpoOXNvZU0zZUpJS3BEOUtXb3h1SlFwaWlsdldTZ3o2dGpENlpqTlkzMXRlZVwvMnk3bDRyTEVxNEpOVW5lV2kzTFQ5UXRLdmVuNDhcLytuT1wvaU9FVlZJNlp5SkE2bnloQTlTeHBvVDY5T0o4WitcL3k3bHljWVwvTTNcL0FNaDBvOTRSQXdBQSIsInN1YiI6ImFkbWluIiwicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJpc3MiOiJTcHJpbmcgU2VjdXJpdHkgUkVTVCBHcmFpbHMgUGx1Z2luIiwiZXhwIjoxNjczNDM0NjA1LCJpYXQiOjE2NzM0MzEwMDV9.PgUSDNTY4F-lpqyz1Fh3_s57A9qGerpILYd3CrKk7_U"
  httpOptions = {
    headers: new HttpHeaders({'content-type' : 'application/json', 'Authorization' : "Bearer " + this.token})
  }

  constructor(private http : HttpClient) { }

  getAnnonces() : Observable <any>{
    return this.http.get("http://localhost:8080/api/" + "annonces", this.httpOptions)
  }

}

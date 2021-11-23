import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * API URL from environment configuration file
   * @private
   */
  private readonly _apiUrl = environment.apiUrl;

  public constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  /**
   * Perform GET http method
   * @param endpointUrl API endpoint
   */
  public get<TResponse>(endpointUrl: string): Observable<TResponse> {
    return this._httpClient.get<TResponse>(this._prepareApiUrl(endpointUrl));
  }

  /**
   * Perform POST http method
   * @param endpointUrl API endpoint
   * @param body request body
   */
  public post<TRequest, TResponse>(endpointUrl: string, body: TRequest): Observable<TResponse> {
    return this._httpClient.post<TResponse>(this._prepareApiUrl(endpointUrl), JSON.stringify(body));
  }

  /**
   * Perform DELETE http method
   * @param endpointUrl API endpoint
   * @param body request
   */
  public delete<TRequest, TResponse>(endpointUrl: string, body: TRequest): Observable<TResponse> {
    return this._httpClient.delete<TResponse>(this._prepareApiUrl(endpointUrl), {
      body: JSON.stringify(body)
    });
  }

  /**
   * Perform PUT http method
   * @param endpointUrl API endpoint
   * @param body request body
   */
  public put<TRequest, TResponse>(endpointUrl: string, body: TRequest): Observable<TResponse> {
    return this._httpClient.put<TResponse>(this._prepareApiUrl(endpointUrl), JSON.stringify(body));
  }

  /**
   * Prepare endpoint url
   * @param url endpoint URL to join with application base url
   * @private
   */
  private _prepareApiUrl(url: string): string {
    return `${this._apiUrl}/${url}`;
  }
}

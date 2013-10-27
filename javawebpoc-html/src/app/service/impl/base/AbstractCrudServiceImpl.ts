///<reference path='../../../reference.ts'/>

export module service.impl.base {
    export class AbstractCrudServiceImpl<T extends entity.base.BaseEntity> implements batatinha.contract.base.CrudServiceContract<T> {

        private http: ng.IHttpService;
        private rootUrlContext: string;

        constructor($http: ng.IHttpService, urlContext: string) {
            this.http = $http;
            this.rootUrlContext = "rest/" + urlContext + "/";
        }

        save(item: T, successCallback: (data: T, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
            this.http.post(this.rootUrlContext, item)
                .success((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => successCallback.call(callback))
                .error((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => faultCallback.call(callback));

        }

        update(item: T, successCallback: (data: T, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
            this.http.put(this.rootUrlContext, item)
                .success((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => successCallback.call(callback))
                .error((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => faultCallback.call(callback));
        }

        remove(item: T, successCallback: (data: T, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
            this.http.delete(this.rootUrlContext + item.id)
                 .success((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => successCallback.call(callback))
                 .error((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => faultCallback.call(callback));
        }

        findById(id: number, successCallback: (data: T, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
            this.http.get(this.rootUrlContext + id)
                .success((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => successCallback.call(callback))
                .error((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => faultCallback.call(callback));
        }

        all(successCallback: (data: T[], status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
            this.http.get(this.rootUrlContext)
                .success((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => successCallback.call(callback))
                .error((callback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) => faultCallback.call(callback));
        }

    }
}
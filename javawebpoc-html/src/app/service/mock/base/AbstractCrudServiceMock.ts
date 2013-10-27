///<reference path='../../../reference.ts'/>

export module service.mock.base {

    export class AbstractCrudServiceMock<T extends entity.base.BaseEntity> implements batatinha.contract.base.CrudServiceContract<T> {

        public repo: Array<T> = new Array<T>();

        public timeoutService: ng.ITimeoutService;

        constructor($timeout: ng.ITimeoutService) {
            this.timeoutService = $timeout;
        }

        save(item: T, successCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
        }

        update(item: T, successCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
        }

        remove(item: T, successCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
        }

        findById(id: number, successCallback: (data: T, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {
            var target: T;
            this.repo.forEach((x) => { if (x.id == id) target = x });
            this.timeoutService(() => successCallback(target, 200, null, null), 0);
        }

        all(successCallback: (data: T[], status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any,
            faultCallback: (data: any, status: number, headers: (headerName: string) => string, config: ng.IRequestConfig) => any) {

            this.timeoutService(() => successCallback(this.repo, 200, null, null), 3000);
        }
    }
}


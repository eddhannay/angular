'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var runtime_compiler_1 = require("./runtime_compiler");
var template_compiler_1 = require('./template_compiler');
exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
var directive_metadata_1 = require('./directive_metadata');
exports.CompileDirectiveMetadata = directive_metadata_1.CompileDirectiveMetadata;
exports.CompileTypeMetadata = directive_metadata_1.CompileTypeMetadata;
exports.CompileTemplateMetadata = directive_metadata_1.CompileTemplateMetadata;
var source_module_1 = require('./source_module');
exports.SourceModule = source_module_1.SourceModule;
exports.SourceWithImports = source_module_1.SourceWithImports;
var platform_directives_and_pipes_1 = require('angular2/src/core/platform_directives_and_pipes');
exports.PLATFORM_DIRECTIVES = platform_directives_and_pipes_1.PLATFORM_DIRECTIVES;
exports.PLATFORM_PIPES = platform_directives_and_pipes_1.PLATFORM_PIPES;
__export(require('angular2/src/compiler/template_ast'));
var template_parser_1 = require('angular2/src/compiler/template_parser');
exports.TEMPLATE_TRANSFORMS = template_parser_1.TEMPLATE_TRANSFORMS;
var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var template_parser_2 = require('angular2/src/compiler/template_parser');
var html_parser_1 = require('angular2/src/compiler/html_parser');
var template_normalizer_1 = require('angular2/src/compiler/template_normalizer');
var runtime_metadata_1 = require('angular2/src/compiler/runtime_metadata');
var change_detector_compiler_1 = require('angular2/src/compiler/change_detector_compiler');
var style_compiler_1 = require('angular2/src/compiler/style_compiler');
var view_compiler_1 = require('angular2/src/compiler/view_compiler');
var proto_view_compiler_1 = require('angular2/src/compiler/proto_view_compiler');
var template_compiler_2 = require('angular2/src/compiler/template_compiler');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var compiler_1 = require('angular2/src/core/linker/compiler');
var runtime_compiler_2 = require('angular2/src/compiler/runtime_compiler');
var element_schema_registry_1 = require('angular2/src/compiler/schema/element_schema_registry');
var dom_element_schema_registry_1 = require('angular2/src/compiler/schema/dom_element_schema_registry');
var url_resolver_1 = require('angular2/src/compiler/url_resolver');
var change_detection_2 = require('angular2/src/core/change_detection/change_detection');
function createChangeDetectorGenConfig() {
    return new change_detection_1.ChangeDetectorGenConfig(lang_1.assertionsEnabled(), false, true);
}
/**
 * A set of providers that provide `RuntimeCompiler` and its dependencies to use for
 * template compilation.
 */
exports.COMPILER_PROVIDERS = lang_1.CONST_EXPR([
    change_detection_2.Lexer,
    change_detection_2.Parser,
    html_parser_1.HtmlParser,
    template_parser_2.TemplateParser,
    template_normalizer_1.TemplateNormalizer,
    runtime_metadata_1.RuntimeMetadataResolver,
    url_resolver_1.DEFAULT_PACKAGE_URL_PROVIDER,
    style_compiler_1.StyleCompiler,
    proto_view_compiler_1.ProtoViewCompiler,
    view_compiler_1.ViewCompiler,
    change_detector_compiler_1.ChangeDetectionCompiler,
    new di_1.Provider(change_detection_1.ChangeDetectorGenConfig, { useFactory: createChangeDetectorGenConfig, deps: [] }),
    template_compiler_2.TemplateCompiler,
    new di_1.Provider(runtime_compiler_2.RuntimeCompiler, { useClass: runtime_compiler_1.RuntimeCompiler_ }),
    new di_1.Provider(compiler_1.Compiler, { useExisting: runtime_compiler_2.RuntimeCompiler }),
    dom_element_schema_registry_1.DomElementSchemaRegistry,
    new di_1.Provider(element_schema_registry_1.ElementSchemaRegistry, { useExisting: dom_element_schema_registry_1.DomElementSchemaRegistry }),
    url_resolver_1.UrlResolver
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUlVblAyTUpOLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUErQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3BELGtDQUErQixxQkFBcUIsQ0FBQztBQUE3QyxnRUFBNkM7QUFDckQsbUNBSU8sc0JBQXNCLENBQUM7QUFINUIsaUZBQXdCO0FBQ3hCLHVFQUFtQjtBQUNuQiwrRUFDNEI7QUFDOUIsOEJBQThDLGlCQUFpQixDQUFDO0FBQXhELG9EQUFZO0FBQUUsOERBQTBDO0FBQ2hFLDhDQUFrRCxpREFBaUQsQ0FBQztBQUE1RixrRkFBbUI7QUFBRSx3RUFBdUU7QUFDcEcsaUJBQWMsb0NBQW9DLENBQUMsRUFBQTtBQUNuRCxnQ0FBa0MsdUNBQXVDLENBQUM7QUFBbEUsb0VBQWtFO0FBQzFFLHFCQUFrRCwwQkFBMEIsQ0FBQyxDQUFBO0FBQzdFLG1CQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3ZELGdDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ3JFLDRCQUF5QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzdELG9DQUFpQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzdFLGlDQUFzQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQy9FLHlDQUFzQyxnREFBZ0QsQ0FBQyxDQUFBO0FBQ3ZGLCtCQUE0QixzQ0FBc0MsQ0FBQyxDQUFBO0FBQ25FLDhCQUEyQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ2pFLG9DQUFnQywyQ0FBMkMsQ0FBQyxDQUFBO0FBQzVFLGtDQUErQix5Q0FBeUMsQ0FBQyxDQUFBO0FBQ3pFLGlDQUFzQyxxREFBcUQsQ0FBQyxDQUFBO0FBQzVGLHlCQUF1QixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzNELGlDQUE4Qix3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3ZFLHdDQUFvQyxzREFBc0QsQ0FBQyxDQUFBO0FBQzNGLDRDQUF1QywwREFBMEQsQ0FBQyxDQUFBO0FBQ2xHLDZCQUF3RCxvQ0FBb0MsQ0FBQyxDQUFBO0FBQzdGLGlDQUE0QixxREFBcUQsQ0FBQyxDQUFBO0FBRWxGO0lBQ0UsTUFBTSxDQUFDLElBQUksMENBQXVCLENBQUMsd0JBQWlCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUVEOzs7R0FHRztBQUNVLDBCQUFrQixHQUFtQyxpQkFBVSxDQUFDO0lBQzNFLHdCQUFLO0lBQ0wseUJBQU07SUFDTix3QkFBVTtJQUNWLGdDQUFjO0lBQ2Qsd0NBQWtCO0lBQ2xCLDBDQUF1QjtJQUN2QiwyQ0FBNEI7SUFDNUIsOEJBQWE7SUFDYix1Q0FBaUI7SUFDakIsNEJBQVk7SUFDWixrREFBdUI7SUFDdkIsSUFBSSxhQUFRLENBQUMsMENBQXVCLEVBQUUsRUFBQyxVQUFVLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO0lBQzVGLG9DQUFnQjtJQUNoQixJQUFJLGFBQVEsQ0FBQyxrQ0FBZSxFQUFFLEVBQUMsUUFBUSxFQUFFLG1DQUFnQixFQUFDLENBQUM7SUFDM0QsSUFBSSxhQUFRLENBQUMsbUJBQVEsRUFBRSxFQUFDLFdBQVcsRUFBRSxrQ0FBZSxFQUFDLENBQUM7SUFDdEQsc0RBQXdCO0lBQ3hCLElBQUksYUFBUSxDQUFDLCtDQUFxQixFQUFFLEVBQUMsV0FBVyxFQUFFLHNEQUF3QixFQUFDLENBQUM7SUFDNUUsMEJBQVc7Q0FDWixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1J1bnRpbWVDb21waWxlcl99IGZyb20gXCIuL3J1bnRpbWVfY29tcGlsZXJcIjtcbmV4cG9ydCB7VGVtcGxhdGVDb21waWxlcn0gZnJvbSAnLi90ZW1wbGF0ZV9jb21waWxlcic7XG5leHBvcnQge1xuICBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEsXG4gIENvbXBpbGVUeXBlTWV0YWRhdGEsXG4gIENvbXBpbGVUZW1wbGF0ZU1ldGFkYXRhXG59IGZyb20gJy4vZGlyZWN0aXZlX21ldGFkYXRhJztcbmV4cG9ydCB7U291cmNlTW9kdWxlLCBTb3VyY2VXaXRoSW1wb3J0c30gZnJvbSAnLi9zb3VyY2VfbW9kdWxlJztcbmV4cG9ydCB7UExBVEZPUk1fRElSRUNUSVZFUywgUExBVEZPUk1fUElQRVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2RpcmVjdGl2ZXNfYW5kX3BpcGVzJztcbmV4cG9ydCAqIGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9hc3QnO1xuZXhwb3J0IHtURU1QTEFURV9UUkFOU0ZPUk1TfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfcGFyc2VyJztcbmltcG9ydCB7YXNzZXJ0aW9uc0VuYWJsZWQsIFR5cGUsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3Byb3ZpZGUsIFByb3ZpZGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1RlbXBsYXRlUGFyc2VyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfcGFyc2VyJztcbmltcG9ydCB7SHRtbFBhcnNlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL2h0bWxfcGFyc2VyJztcbmltcG9ydCB7VGVtcGxhdGVOb3JtYWxpemVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdGVtcGxhdGVfbm9ybWFsaXplcic7XG5pbXBvcnQge1J1bnRpbWVNZXRhZGF0YVJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvbkNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvY2hhbmdlX2RldGVjdG9yX2NvbXBpbGVyJztcbmltcG9ydCB7U3R5bGVDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3N0eWxlX2NvbXBpbGVyJztcbmltcG9ydCB7Vmlld0NvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvdmlld19jb21waWxlcic7XG5pbXBvcnQge1Byb3RvVmlld0NvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcHJvdG9fdmlld19jb21waWxlcic7XG5pbXBvcnQge1RlbXBsYXRlQ29tcGlsZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci90ZW1wbGF0ZV9jb21waWxlcic7XG5pbXBvcnQge0NoYW5nZURldGVjdG9yR2VuQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2NvbXBpbGVyJztcbmltcG9ydCB7UnVudGltZUNvbXBpbGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIvcnVudGltZV9jb21waWxlcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3NjaGVtYS9kb21fZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtVcmxSZXNvbHZlciwgREVGQVVMVF9QQUNLQUdFX1VSTF9QUk9WSURFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5pbXBvcnQge1BhcnNlciwgTGV4ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYW5nZURldGVjdG9yR2VuQ29uZmlnKCk6IENoYW5nZURldGVjdG9yR2VuQ29uZmlnIHtcbiAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRlY3RvckdlbkNvbmZpZyhhc3NlcnRpb25zRW5hYmxlZCgpLCBmYWxzZSwgdHJ1ZSk7XG59XG5cbi8qKlxuICogQSBzZXQgb2YgcHJvdmlkZXJzIHRoYXQgcHJvdmlkZSBgUnVudGltZUNvbXBpbGVyYCBhbmQgaXRzIGRlcGVuZGVuY2llcyB0byB1c2UgZm9yXG4gKiB0ZW1wbGF0ZSBjb21waWxhdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1BST1ZJREVSUzogQXJyYXk8VHlwZSB8IFByb3ZpZGVyIHwgYW55W10+ID0gQ09OU1RfRVhQUihbXG4gIExleGVyLFxuICBQYXJzZXIsXG4gIEh0bWxQYXJzZXIsXG4gIFRlbXBsYXRlUGFyc2VyLFxuICBUZW1wbGF0ZU5vcm1hbGl6ZXIsXG4gIFJ1bnRpbWVNZXRhZGF0YVJlc29sdmVyLFxuICBERUZBVUxUX1BBQ0tBR0VfVVJMX1BST1ZJREVSLFxuICBTdHlsZUNvbXBpbGVyLFxuICBQcm90b1ZpZXdDb21waWxlcixcbiAgVmlld0NvbXBpbGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25Db21waWxlcixcbiAgbmV3IFByb3ZpZGVyKENoYW5nZURldGVjdG9yR2VuQ29uZmlnLCB7dXNlRmFjdG9yeTogY3JlYXRlQ2hhbmdlRGV0ZWN0b3JHZW5Db25maWcsIGRlcHM6IFtdfSksXG4gIFRlbXBsYXRlQ29tcGlsZXIsXG4gIG5ldyBQcm92aWRlcihSdW50aW1lQ29tcGlsZXIsIHt1c2VDbGFzczogUnVudGltZUNvbXBpbGVyX30pLFxuICBuZXcgUHJvdmlkZXIoQ29tcGlsZXIsIHt1c2VFeGlzdGluZzogUnVudGltZUNvbXBpbGVyfSksXG4gIERvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeSxcbiAgbmV3IFByb3ZpZGVyKEVsZW1lbnRTY2hlbWFSZWdpc3RyeSwge3VzZUV4aXN0aW5nOiBEb21FbGVtZW50U2NoZW1hUmVnaXN0cnl9KSxcbiAgVXJsUmVzb2x2ZXJcbl0pO1xuIl19
/**
 * Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.
 */
export type FileListPurposeEnum =
  | "account_requirement"
  | "additional_verification"
  | "business_icon"
  | "business_logo"
  | "customer_signature"
  | "dispute_evidence"
  | "document_provider_identity_document"
  | "finance_report_run"
  | "financial_account_statement"
  | "identity_document"
  | "identity_document_downloadable"
  | "issuing_regulatory_reporting"
  | "pci_document"
  | "selfie"
  | "sigma_scheduled_query"
  | "tax_document_user_upload"
  | "terminal_reader_splashscreen";

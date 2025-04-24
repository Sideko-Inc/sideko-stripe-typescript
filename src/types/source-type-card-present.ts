import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceTypeCardPresent
 */
export type SourceTypeCardPresent = {
  applicationCryptogram?: string | undefined;
  applicationPreferredName?: string | undefined;
  authorizationCode?: string | null | undefined;
  authorizationResponseCode?: string | undefined;
  brand?: string | null | undefined;
  country?: string | null | undefined;
  cvmType?: string | undefined;
  dataType?: string | null | undefined;
  dedicatedFileName?: string | undefined;
  emvAuthData?: string | undefined;
  evidenceCustomerSignature?: string | null | undefined;
  evidenceTransactionCertificate?: string | null | undefined;
  expMonth?: number | null | undefined;
  expYear?: number | null | undefined;
  fingerprint?: string | undefined;
  funding?: string | null | undefined;
  last4?: string | null | undefined;
  posDeviceId?: string | null | undefined;
  posEntryMode?: string | undefined;
  readMethod?: string | null | undefined;
  reader?: string | null | undefined;
  terminalVerificationResults?: string | undefined;
  transactionStatusInformation?: string | undefined;
};

/**
 * @internal
 * SourceTypeCardPresent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceTypeCardPresent = {
  application_cryptogram?: string | undefined;
  application_preferred_name?: string | undefined;
  authorization_code?: string | null | undefined;
  authorization_response_code?: string | undefined;
  brand?: string | null | undefined;
  country?: string | null | undefined;
  cvm_type?: string | undefined;
  data_type?: string | null | undefined;
  dedicated_file_name?: string | undefined;
  emv_auth_data?: string | undefined;
  evidence_customer_signature?: string | null | undefined;
  evidence_transaction_certificate?: string | null | undefined;
  exp_month?: number | null | undefined;
  exp_year?: number | null | undefined;
  fingerprint?: string | undefined;
  funding?: string | null | undefined;
  last4?: string | null | undefined;
  pos_device_id?: string | null | undefined;
  pos_entry_mode?: string | undefined;
  read_method?: string | null | undefined;
  reader?: string | null | undefined;
  terminal_verification_results?: string | undefined;
  transaction_status_information?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceTypeCardPresent
 */
const SchemaIn$SourceTypeCardPresent: z.ZodType<
  SourceTypeCardPresent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_cryptogram: z.string().optional(),
    application_preferred_name: z.string().optional(),
    authorization_code: z.string().nullable().optional(),
    authorization_response_code: z.string().optional(),
    brand: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    cvm_type: z.string().optional(),
    data_type: z.string().nullable().optional(),
    dedicated_file_name: z.string().optional(),
    emv_auth_data: z.string().optional(),
    evidence_customer_signature: z.string().nullable().optional(),
    evidence_transaction_certificate: z.string().nullable().optional(),
    exp_month: z.number().int().nullable().optional(),
    exp_year: z.number().int().nullable().optional(),
    fingerprint: z.string().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    pos_device_id: z.string().nullable().optional(),
    pos_entry_mode: z.string().optional(),
    read_method: z.string().nullable().optional(),
    reader: z.string().nullable().optional(),
    terminal_verification_results: z.string().optional(),
    transaction_status_information: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application_cryptogram: "applicationCryptogram",
      application_preferred_name: "applicationPreferredName",
      authorization_code: "authorizationCode",
      authorization_response_code: "authorizationResponseCode",
      brand: "brand",
      country: "country",
      cvm_type: "cvmType",
      data_type: "dataType",
      dedicated_file_name: "dedicatedFileName",
      emv_auth_data: "emvAuthData",
      evidence_customer_signature: "evidenceCustomerSignature",
      evidence_transaction_certificate: "evidenceTransactionCertificate",
      exp_month: "expMonth",
      exp_year: "expYear",
      fingerprint: "fingerprint",
      funding: "funding",
      last4: "last4",
      pos_device_id: "posDeviceId",
      pos_entry_mode: "posEntryMode",
      read_method: "readMethod",
      reader: "reader",
      terminal_verification_results: "terminalVerificationResults",
      transaction_status_information: "transactionStatusInformation",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceTypeCardPresent
 */
const SchemaOut$SourceTypeCardPresent: z.ZodType<
  External$SourceTypeCardPresent, // output type of this zod object
  z.ZodTypeDef,
  SourceTypeCardPresent // the object to be transformed
> = z
  .object({
    applicationCryptogram: z.string().optional(),
    applicationPreferredName: z.string().optional(),
    authorizationCode: z.string().nullable().optional(),
    authorizationResponseCode: z.string().optional(),
    brand: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
    cvmType: z.string().optional(),
    dataType: z.string().nullable().optional(),
    dedicatedFileName: z.string().optional(),
    emvAuthData: z.string().optional(),
    evidenceCustomerSignature: z.string().nullable().optional(),
    evidenceTransactionCertificate: z.string().nullable().optional(),
    expMonth: z.number().int().nullable().optional(),
    expYear: z.number().int().nullable().optional(),
    fingerprint: z.string().optional(),
    funding: z.string().nullable().optional(),
    last4: z.string().nullable().optional(),
    posDeviceId: z.string().nullable().optional(),
    posEntryMode: z.string().optional(),
    readMethod: z.string().nullable().optional(),
    reader: z.string().nullable().optional(),
    terminalVerificationResults: z.string().optional(),
    transactionStatusInformation: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicationCryptogram: "application_cryptogram",
      applicationPreferredName: "application_preferred_name",
      authorizationCode: "authorization_code",
      authorizationResponseCode: "authorization_response_code",
      brand: "brand",
      country: "country",
      cvmType: "cvm_type",
      dataType: "data_type",
      dedicatedFileName: "dedicated_file_name",
      emvAuthData: "emv_auth_data",
      evidenceCustomerSignature: "evidence_customer_signature",
      evidenceTransactionCertificate: "evidence_transaction_certificate",
      expMonth: "exp_month",
      expYear: "exp_year",
      fingerprint: "fingerprint",
      funding: "funding",
      last4: "last4",
      posDeviceId: "pos_device_id",
      posEntryMode: "pos_entry_mode",
      readMethod: "read_method",
      reader: "reader",
      terminalVerificationResults: "terminal_verification_results",
      transactionStatusInformation: "transaction_status_information",
    });
  });

export const Schemas$SourceTypeCardPresent = {
  in: SchemaIn$SourceTypeCardPresent,
  out: SchemaOut$SourceTypeCardPresent,
};

import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationNetworkData = {
  /**
   * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be `null`.
   */
  acquiringInstitutionId?: string | null | undefined;
  /**
   * The System Trace Audit Number (STAN) is a 6-digit identifier assigned by the acquirer. Prefer `network_data.transaction_id` if present, unless you have special requirements.
   */
  systemTraceAuditNumber?: string | null | undefined;
  /**
   * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
   */
  transactionId?: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationNetworkData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationNetworkData = {
  acquiring_institution_id?: string | null | undefined;
  system_trace_audit_number?: string | null | undefined;
  transaction_id?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationNetworkData
 */
const SchemaIn$IssuingAuthorizationNetworkData: z.ZodType<
  IssuingAuthorizationNetworkData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acquiring_institution_id: z.string().nullable().optional(),
    system_trace_audit_number: z.string().nullable().optional(),
    transaction_id: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acquiring_institution_id: "acquiringInstitutionId",
      system_trace_audit_number: "systemTraceAuditNumber",
      transaction_id: "transactionId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationNetworkData
 */
const SchemaOut$IssuingAuthorizationNetworkData: z.ZodType<
  External$IssuingAuthorizationNetworkData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationNetworkData // the object to be transformed
> = z
  .object({
    acquiringInstitutionId: z.string().nullable().optional(),
    systemTraceAuditNumber: z.string().nullable().optional(),
    transactionId: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acquiringInstitutionId: "acquiring_institution_id",
      systemTraceAuditNumber: "system_trace_audit_number",
      transactionId: "transaction_id",
    });
  });

export const Schemas$IssuingAuthorizationNetworkData = {
  in: SchemaIn$IssuingAuthorizationNetworkData,
  out: SchemaOut$IssuingAuthorizationNetworkData,
};

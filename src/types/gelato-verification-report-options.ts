import {
  External$GelatoReportDocumentOptions,
  GelatoReportDocumentOptions,
  Schemas$GelatoReportDocumentOptions,
} from "./gelato-report-document-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoVerificationReportOptions = {
  document?: GelatoReportDocumentOptions | undefined;
  idNumber?: Record<string, any> | undefined;
};

/**
 * @internal
 * GelatoVerificationReportOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoVerificationReportOptions = {
  document?: External$GelatoReportDocumentOptions | undefined;
  id_number?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoVerificationReportOptions
 */
const SchemaIn$GelatoVerificationReportOptions: z.ZodType<
  GelatoVerificationReportOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: Schemas$GelatoReportDocumentOptions.in.optional(),
    id_number: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
      id_number: "idNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoVerificationReportOptions
 */
const SchemaOut$GelatoVerificationReportOptions: z.ZodType<
  External$GelatoVerificationReportOptions, // output type of this zod object
  z.ZodTypeDef,
  GelatoVerificationReportOptions // the object to be transformed
> = z
  .object({
    document: Schemas$GelatoReportDocumentOptions.out.optional(),
    idNumber: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
      idNumber: "id_number",
    });
  });

export const Schemas$GelatoVerificationReportOptions = {
  in: SchemaIn$GelatoVerificationReportOptions,
  out: SchemaOut$GelatoVerificationReportOptions,
};

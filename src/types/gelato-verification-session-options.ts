import {
  External$GelatoSessionDocumentOptions,
  GelatoSessionDocumentOptions,
  Schemas$GelatoSessionDocumentOptions,
} from "./gelato-session-document-options";
import {
  External$GelatoSessionEmailOptions,
  GelatoSessionEmailOptions,
  Schemas$GelatoSessionEmailOptions,
} from "./gelato-session-email-options";
import {
  External$GelatoSessionPhoneOptions,
  GelatoSessionPhoneOptions,
  Schemas$GelatoSessionPhoneOptions,
} from "./gelato-session-phone-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoVerificationSessionOptions = {
  document?: GelatoSessionDocumentOptions | undefined;
  email?: GelatoSessionEmailOptions | undefined;
  idNumber?: Record<string, any> | undefined;
  phone?: GelatoSessionPhoneOptions | undefined;
};

/**
 * @internal
 * GelatoVerificationSessionOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoVerificationSessionOptions = {
  document?: External$GelatoSessionDocumentOptions | undefined;
  email?: External$GelatoSessionEmailOptions | undefined;
  id_number?: Record<string, any> | undefined;
  phone?: External$GelatoSessionPhoneOptions | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoVerificationSessionOptions
 */
const SchemaIn$GelatoVerificationSessionOptions: z.ZodType<
  GelatoVerificationSessionOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: Schemas$GelatoSessionDocumentOptions.in.optional(),
    email: Schemas$GelatoSessionEmailOptions.in.optional(),
    id_number: z.record(z.string(), z.any()).optional(),
    phone: Schemas$GelatoSessionPhoneOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
      email: "email",
      id_number: "idNumber",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoVerificationSessionOptions
 */
const SchemaOut$GelatoVerificationSessionOptions: z.ZodType<
  External$GelatoVerificationSessionOptions, // output type of this zod object
  z.ZodTypeDef,
  GelatoVerificationSessionOptions // the object to be transformed
> = z
  .object({
    document: Schemas$GelatoSessionDocumentOptions.out.optional(),
    email: Schemas$GelatoSessionEmailOptions.out.optional(),
    idNumber: z.record(z.string(), z.any()).optional(),
    phone: Schemas$GelatoSessionPhoneOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
      email: "email",
      idNumber: "id_number",
      phone: "phone",
    });
  });

export const Schemas$GelatoVerificationSessionOptions = {
  in: SchemaIn$GelatoVerificationSessionOptions,
  out: SchemaOut$GelatoVerificationSessionOptions,
};

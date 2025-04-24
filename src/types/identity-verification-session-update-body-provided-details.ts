import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details provided about the user being verified. These details may be shown to the user.
 */
export type IdentityVerificationSessionUpdateBodyProvidedDetails = {
  email?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * IdentityVerificationSessionUpdateBodyProvidedDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSessionUpdateBodyProvidedDetails = {
  email?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSessionUpdateBodyProvidedDetails
 */
const SchemaIn$IdentityVerificationSessionUpdateBodyProvidedDetails: z.ZodType<
  IdentityVerificationSessionUpdateBodyProvidedDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    email: z.string().optional(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSessionUpdateBodyProvidedDetails
 */
const SchemaOut$IdentityVerificationSessionUpdateBodyProvidedDetails: z.ZodType<
  External$IdentityVerificationSessionUpdateBodyProvidedDetails, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSessionUpdateBodyProvidedDetails // the object to be transformed
> = z
  .object({
    email: z.string().optional(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      email: "email",
      phone: "phone",
    });
  });

export const Schemas$IdentityVerificationSessionUpdateBodyProvidedDetails = {
  in: SchemaIn$IdentityVerificationSessionUpdateBodyProvidedDetails,
  out: SchemaOut$IdentityVerificationSessionUpdateBodyProvidedDetails,
};

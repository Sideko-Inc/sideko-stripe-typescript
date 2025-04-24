import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details provided about the user being verified. These details may be shown to the user.
 */
export type IdentityVerificationSessionCreateBodyProvidedDetails = {
  email?: string | undefined;
  phone?: string | undefined;
};

/**
 * @internal
 * IdentityVerificationSessionCreateBodyProvidedDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IdentityVerificationSessionCreateBodyProvidedDetails = {
  email?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IdentityVerificationSessionCreateBodyProvidedDetails
 */
const SchemaIn$IdentityVerificationSessionCreateBodyProvidedDetails: z.ZodType<
  IdentityVerificationSessionCreateBodyProvidedDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IdentityVerificationSessionCreateBodyProvidedDetails
 */
const SchemaOut$IdentityVerificationSessionCreateBodyProvidedDetails: z.ZodType<
  External$IdentityVerificationSessionCreateBodyProvidedDetails, // output type of this zod object
  z.ZodTypeDef,
  IdentityVerificationSessionCreateBodyProvidedDetails // the object to be transformed
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

export const Schemas$IdentityVerificationSessionCreateBodyProvidedDetails = {
  in: SchemaIn$IdentityVerificationSessionCreateBodyProvidedDetails,
  out: SchemaOut$IdentityVerificationSessionCreateBodyProvidedDetails,
};

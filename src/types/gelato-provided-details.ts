import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type GelatoProvidedDetails = {
  /**
   * Email of user being verified
   */
  email?: string | undefined;
  /**
   * Phone number of user being verified
   */
  phone?: string | undefined;
};

/**
 * @internal
 * GelatoProvidedDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GelatoProvidedDetails = {
  email?: string | undefined;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GelatoProvidedDetails
 */
const SchemaIn$GelatoProvidedDetails: z.ZodType<
  GelatoProvidedDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GelatoProvidedDetails
 */
const SchemaOut$GelatoProvidedDetails: z.ZodType<
  External$GelatoProvidedDetails, // output type of this zod object
  z.ZodTypeDef,
  GelatoProvidedDetails // the object to be transformed
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

export const Schemas$GelatoProvidedDetails = {
  in: SchemaIn$GelatoProvidedDetails,
  out: SchemaOut$GelatoProvidedDetails,
};

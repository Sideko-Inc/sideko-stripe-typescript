import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceCreateBodyMandateAcceptanceOffline
 */
export type SourceCreateBodyMandateAcceptanceOffline = {
  contactEmail: string;
};

/**
 * @internal
 * SourceCreateBodyMandateAcceptanceOffline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyMandateAcceptanceOffline = {
  contact_email: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyMandateAcceptanceOffline
 */
const SchemaIn$SourceCreateBodyMandateAcceptanceOffline: z.ZodType<
  SourceCreateBodyMandateAcceptanceOffline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    contact_email: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      contact_email: "contactEmail",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyMandateAcceptanceOffline
 */
const SchemaOut$SourceCreateBodyMandateAcceptanceOffline: z.ZodType<
  External$SourceCreateBodyMandateAcceptanceOffline, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyMandateAcceptanceOffline // the object to be transformed
> = z
  .object({
    contactEmail: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      contactEmail: "contact_email",
    });
  });

export const Schemas$SourceCreateBodyMandateAcceptanceOffline = {
  in: SchemaIn$SourceCreateBodyMandateAcceptanceOffline,
  out: SchemaOut$SourceCreateBodyMandateAcceptanceOffline,
};

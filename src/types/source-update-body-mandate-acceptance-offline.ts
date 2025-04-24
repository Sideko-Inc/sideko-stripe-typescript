import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceUpdateBodyMandateAcceptanceOffline
 */
export type SourceUpdateBodyMandateAcceptanceOffline = {
  contactEmail: string;
};

/**
 * @internal
 * SourceUpdateBodyMandateAcceptanceOffline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodyMandateAcceptanceOffline = {
  contact_email: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodyMandateAcceptanceOffline
 */
const SchemaIn$SourceUpdateBodyMandateAcceptanceOffline: z.ZodType<
  SourceUpdateBodyMandateAcceptanceOffline, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodyMandateAcceptanceOffline
 */
const SchemaOut$SourceUpdateBodyMandateAcceptanceOffline: z.ZodType<
  External$SourceUpdateBodyMandateAcceptanceOffline, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodyMandateAcceptanceOffline // the object to be transformed
> = z
  .object({
    contactEmail: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      contactEmail: "contact_email",
    });
  });

export const Schemas$SourceUpdateBodyMandateAcceptanceOffline = {
  in: SchemaIn$SourceUpdateBodyMandateAcceptanceOffline,
  out: SchemaOut$SourceUpdateBodyMandateAcceptanceOffline,
};

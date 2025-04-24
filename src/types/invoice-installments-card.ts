import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceInstallmentsCard = {
  /**
   * Whether Installments are enabled for this Invoice.
   */
  enabled?: boolean | null | undefined;
};

/**
 * @internal
 * InvoiceInstallmentsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceInstallmentsCard = {
  enabled?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceInstallmentsCard
 */
const SchemaIn$InvoiceInstallmentsCard: z.ZodType<
  InvoiceInstallmentsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceInstallmentsCard
 */
const SchemaOut$InvoiceInstallmentsCard: z.ZodType<
  External$InvoiceInstallmentsCard, // output type of this zod object
  z.ZodTypeDef,
  InvoiceInstallmentsCard // the object to be transformed
> = z
  .object({
    enabled: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$InvoiceInstallmentsCard = {
  in: SchemaIn$InvoiceInstallmentsCard,
  out: SchemaOut$InvoiceInstallmentsCard,
};

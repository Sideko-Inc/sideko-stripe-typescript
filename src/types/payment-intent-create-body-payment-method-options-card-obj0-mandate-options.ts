import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount: number;
    amountType: "fixed" | "maximum";
    description?: string | undefined;
    endDate?: number | undefined;
    interval: "day" | "month" | "sporadic" | "week" | "year";
    intervalCount?: number | undefined;
    reference: string;
    startDate: number;
    supportedTypes?: "india"[] | undefined;
  };

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions =
  {
    amount: number;
    amount_type: "fixed" | "maximum";
    description?: string | undefined;
    end_date?: number | undefined;
    interval: "day" | "month" | "sporadic" | "week" | "year";
    interval_count?: number | undefined;
    reference: string;
    start_date: number;
    supported_types?: "india"[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_type: z.enum(["fixed", "maximum"]),
    description: z.string().optional(),
    end_date: z.number().int().optional(),
    interval: z.enum(["day", "month", "sporadic", "week", "year"]),
    interval_count: z.number().int().optional(),
    reference: z.string(),
    start_date: z.number().int(),
    supported_types: z.array(z.enum(["india"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_type: "amountType",
      description: "description",
      end_date: "endDate",
      interval: "interval",
      interval_count: "intervalCount",
      reference: "reference",
      start_date: "startDate",
      supported_types: "supportedTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountType: z.enum(["fixed", "maximum"]),
    description: z.string().optional(),
    endDate: z.number().int().optional(),
    interval: z.enum(["day", "month", "sporadic", "week", "year"]),
    intervalCount: z.number().int().optional(),
    reference: z.string(),
    startDate: z.number().int(),
    supportedTypes: z.array(z.enum(["india"])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountType: "amount_type",
      description: "description",
      endDate: "end_date",
      interval: "interval",
      intervalCount: "interval_count",
      reference: "reference",
      startDate: "start_date",
      supportedTypes: "supported_types",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCardObj0MandateOptions,
  };
